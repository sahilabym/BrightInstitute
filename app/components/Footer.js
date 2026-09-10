import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 font-extrabold text-white text-lg">
              A
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white">
                Bright <span className="text-brand-300">Institute</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-300/80">
                School of Higher Learning
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-brand-100/75 leading-relaxed">
            Empowering minds through excellence in academic learning since 1985.
            A globally respected institute where scholarship, creativity, and
            civic responsibility converge.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-300">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-brand-300">Courses</Link></li>
            <li><Link href="/register" className="hover:text-brand-300">Register</Link></li>
            <li><Link href="/contact" className="hover:text-brand-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <address className="mt-4 space-y-2 text-sm not-italic text-brand-100/75">
            <div>123 Scholar Avenue<br/>Learning City, LC 45678</div>
            <div>hello@Bright-institute.edu</div>
            <div>+1 (555) 123-4567</div>
          </address>
        </div>
      </div>
      <div className="border-t border-brand-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-brand-100/60 sm:flex-row sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Bright Institute. All rights reserved.</div>
          <div>Made with care · Poppins</div>
        </div>
      </div>
    </footer>
  );
}
