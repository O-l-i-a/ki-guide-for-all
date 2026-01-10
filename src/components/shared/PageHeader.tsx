import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const PageHeader = ({ title, description, icon }: PageHeaderProps) => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {icon && (
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {icon}
            </div>
          )}
          <h1 className="mb-4 font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-secondary-foreground/80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
