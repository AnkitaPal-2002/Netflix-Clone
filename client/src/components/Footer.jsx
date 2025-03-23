const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Contact Information */}
        <p className="text-sm mb-6">
          Questions? Call{" "}
          <a href="tel:+000-000-0000" className="underline hover:text-gray-300">
            000-000-0000
          </a>
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Account
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Redeem Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Buy Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Ways to Watch
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Speed Test
          </a>
          <a href="#" className="hover:underline">
            Legal Notices
          </a>
          <a href="#" className="hover:underline">
            Only on Netflix
          </a>
        </div>

        {/* Language Selector */}
        <div className="mt-6">
          <select className="bg-black border border-gray-600 text-white px-4 py-2 rounded">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
