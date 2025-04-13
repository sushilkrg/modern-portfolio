import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} Sushil Kumar. All rights reserved.
    </footer>
  );
}

export default Footer