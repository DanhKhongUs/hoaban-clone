import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: Icon;
}

function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <section className="w-full bg-[#fdfbf5] py-6 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#4a4a4a] mb-4 relative after:block after:mt-2 after:h-[2px] after:w-16 after:bg-[#c0b49f] after:mx-auto">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#5a5a5a] mt-2 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {icon && (
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
    </section>
  );
}

export default SectionTitle;
