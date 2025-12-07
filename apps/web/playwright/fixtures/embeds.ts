import pino from 'pino'
import type { Page } from "@playwright/test";
const logger = pino()

export const createEmbedsFixture = (page: Page) => {
  return {
    /**
     * @deprecated
     * Use 'gotoPlayground' instead, to navigate. It calls `addEmbedListeners` automatically.
     */
    async addEmbedListeners(calNamespace: string) {
      await page.addInitScript(
        ({ calNamespace }: { calNamespace: string }) => {
          logger.info(
            "PlaywrightTest - InitScript:",
            "Adding listener for __iframeReady on namespace:",
            calNamespace
          );
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          window.eventsFiredStoreForPlaywright = window.eventsFiredStoreForPlaywright || {};
          document.addEventListener("DOMContentLoaded", function tryAddingListener() {
            if (parent !== window) {
              // Firefox seems to execute this snippet for iframe as well. Avoid that. It must be executed only for parent frame.

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              window.initialBodyVisibility = document.body.style.visibility;

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              window.initialBodyBackground = document.body.style.background;

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              window.initialValuesSet = true;
              return;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            let api = window.Cal;

            if (!api) {
              logger.info("PlaywrightTest:", "window.Cal not available yet, trying again");
              setTimeout(tryAddingListener, 500);
              return;
            }
            if (calNamespace) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              api = window.Cal.ns[calNamespace];
              logger.info("Using api from namespace-", { calNamespace, api });
            }
            if (!api) {
              logger.info(`namespace "${calNamespace}" not found yet - Trying again`);
              setTimeout(tryAddingListener, 500);
              return;
            }
            logger.info("PlaywrightTest:", `Adding listener for __iframeReady on namespace:${calNamespace}`);
            api("on", {
              action: "*",
              callback: (e) => {
                logger.info("Playwright Embed Fixture: Received event", JSON.stringify(e.detail));
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.iframeReady = true; // Technically if there are multiple cal embeds, it can be set due to some other iframe. But it works for now. Improve it when it doesn't work

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const store = window.eventsFiredStoreForPlaywright;
                const eventStore = (store[`${e.detail.type}-${e.detail.namespace}`] =
                  store[`${e.detail.type}-${e.detail.namespace}`] || []);
                eventStore.push(e.detail);
              },
            });
          });
        },
        { calNamespace }
      );

      page.on("console", (msg) => {
        logger.info(`Browser Console: ${msg.type()}: ${msg.text()}`);
      });

      page.on("framenavigated", async (frame) => {
        logger.info(`Navigation occurred in frame: ${frame.url()}`);
      });

      page.on("pageerror", (error) => {
        logger.error(`Page error: ${error.message}`);
      });

      page.on("requestfailed", (request) => {
        logger.error(`Failed request: ${request.url()}, ${request.failure()?.errorText}`);
      });
    },

    async getActionFiredDetails({ calNamespace, actionType }: { calNamespace: string; actionType: string }) {
      if (!page.isClosed()) {
        return await page.evaluate(
          ({ actionType, calNamespace }) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            return window.eventsFiredStoreForPlaywright[`${actionType}-${calNamespace}`];
          },
          { actionType, calNamespace }
        );
      }
    },

    async gotoPlayground({ calNamespace, url }: { calNamespace: string; url: string }) {
      await this.addEmbedListeners(calNamespace);
      await page.goto(url);
    },
  };
};
