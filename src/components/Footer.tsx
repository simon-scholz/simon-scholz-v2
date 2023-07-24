import Link from "next/link"

const Footer = () => {
    return (
      <div className="w-full max-w-3xl flex flex-row items-center justify-between px-2 mt-20 mb-6">
        <button className="border border-gray-800 dark:border-neutral-50 rounded-full ml-2 px-2 py-1 text-xs text-gray-900 dark:text-neutral-50 tracking-wide">
          CONTACT
        </button>
        <Link
          href="/impressum"
          className="px-2 py-1 text-xs text-gray-900 dark:text-neutral-50"
        >
          Impressum / Legal Notice
        </Link>
      </div>
    );
}

export default Footer