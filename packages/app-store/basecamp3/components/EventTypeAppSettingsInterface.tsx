import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import type { EventTypeAppSettingsComponent } from "@calcom/app-store/types";
import { Select } from "@calcom/ui/components/form";

type Basecamp3Project = { label: string; value: string };

const EventTypeAppSettingsInterface: EventTypeAppSettingsComponent = () => {
const t = useTranslations("basecamp3-event-settings");

  const [projects, setProjects] = useState<Basecamp3Project[] | undefined>();
  const [selectedProject, setSelectedProject] = useState<undefined | { label: string; value: string }>();

  useEffect(() => {
    async function loadProjects() {
      const res = await fetch("/api/integrations/basecamp3/projects");
      if (!res.ok) return;
      const json = await res.json();
      const currentProjectId = json?.currentProject;
      const options: Basecamp3Project[] = json?.projects?.map(
        (project: { id: number | string; name: string }) => ({
          value: String(project.id),
          label: project.name,
        })
      );
      if (!options) return;
      setProjects(options);
      if (currentProjectId) {
        const match = options.find((project: Basecamp3Project) => project.value === String(currentProjectId));
        if (match) setSelectedProject(match);
      }
    }

    loadProjects();
  }, []);

  async function handleProjectChange(project: { label: string; value: string } | null) {
    if (!project) return;

    await fetch("/api/integrations/basecamp3/projectMutation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId: project.value }),
    });
    setSelectedProject(project);
  }

  return (
    <div className="mt-2 text-sm">
      <div className="flex gap-3">
        <div className="items-center">
          <p className="py-2">{t('labels.link-project-instruction')}</p>
        </div>
        <Select
          placeholder={t('placeholders.select-project')}
          options={projects}
          isLoading={!projects}
          className="md:min-w-[120px]"
          onChange={handleProjectChange}
          value={selectedProject}
        />
      </div>
      <div className="mt-2">{t.rich('messages.single-project-limitation', {
      component0: (chunks) => <span className="italic">{chunks}</span>
    })}</div>
    </div>
  );
};

export default EventTypeAppSettingsInterface;
