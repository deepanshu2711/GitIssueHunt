import { TypographyH1 } from "@/components/ui/typography/TypographyH1";

export const PageHeader = ({ title }) => {
  return (
    <div className="items-start flex">
      <TypographyH1 text={title} />
    </div>
  );
};
