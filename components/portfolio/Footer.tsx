export function Footer({ theme = "light" }: { theme?: "light" | "dark" }) {
  const isDark = theme === "dark";

  return (
    <footer
      className={
        isDark
          ? "bg-stone-950 px-6 py-20 text-stone-50 md:px-10 lg:px-12"
          : "bg-[#fbfaf7] px-6 py-20 text-stone-950 md:px-10 lg:px-12"
      }
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col gap-8 border-t pt-12 md:flex-row md:items-end md:justify-between ${isDark ? "border-stone-800" : "border-stone-200"}`}
      >
        <div>
          <p className={`font-serif text-2xl font-semibold tracking-tight ${isDark ? "text-stone-50" : "text-stone-950"}`}>
            Panagiota Grosdouli
          </p>
          <p className={`mt-3 text-base leading-7 ${isDark ? "text-stone-400" : "text-stone-600"}`}>
            MEng Electrical & Computer Engineering · Democritus University of Thrace
          </p>
        </div>

        <div className={`flex gap-8 text-base ${isDark ? "text-stone-400" : "text-stone-600"}`}>
          <a
            href="https://github.com/panagiotagrosdouli"
            target="_blank"
            rel="noreferrer"
            className={`transition ${isDark ? "hover:text-white" : "hover:text-stone-950"}`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/"
            target="_blank"
            rel="noreferrer"
            className={`transition ${isDark ? "hover:text-white" : "hover:text-stone-950"}`}
          >
            LinkedIn
          </a>
          <a href="mailto:panagros1@ee.duth.gr" className={`transition ${isDark ? "hover:text-white" : "hover:text-stone-950"}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
