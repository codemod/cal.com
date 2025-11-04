import { useTranslations } from "next-intl";
import { Table } from "./Table";
import { TableActions } from "./TableActions";
import {
  Table as TableNew,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TableCaption,
} from "./TableNew";

export const TableNewExampleComponent = () =>  {
const t = useTranslations("table-examples");

return (
  <TableNew>
    <TableHeader>
      <TableRow>
        <TableHead>{t('headers.column-one')}</TableHead>
        <TableHead>{t('headers.column-two')}</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>{t('body.row-one-cell-one')}</TableCell>
        <TableCell>{t('body.row-one-cell-two')}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{t('body.row-two-cell-one')}</TableCell>
        <TableCell>{t('body.row-two-cell-two')}</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>{t('footer.row-one-cell-one')}</TableCell>
        <TableCell>{t('footer.row-one-cell-two')}</TableCell>
      </TableRow>
    </TableFooter>
    <TableCaption>{t('caption.table-description')}</TableCaption>
  </TableNew>
)
};

export const TableExampleComponent = () =>  {
const t = useTranslations("table-examples");

return (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.ColumnTitle>{t('titles.column-one')}</Table.ColumnTitle>
        <Table.ColumnTitle>{t('titles.column-two')}</Table.ColumnTitle>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>{t('cells.row-one-cell-one')}</Table.Cell>
        <Table.Cell>{t('cells.row-one-cell-two')}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{t('cells.row-two-cell-one')}</Table.Cell>
        <Table.Cell>{t('cells.row-two-cell-two')}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <TableActions
          actions={[
            {
              id: "action1",
              label: "Action 1",
              href: "#1",
            },
            {
              id: "action2",
              label: "Action 2",
              actions: [
                {
                  id: "action3",
                  label: "Action 3",
                  href: "#nested-action",
                },
              ],
            },
          ]}
        />
      </Table.Row>
    </Table.Body>
  </Table>
)
};
