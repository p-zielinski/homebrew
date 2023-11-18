import Link from 'next/link';
import { createServerSupabaseClient } from '@/app/supabase-server';

import SignOutButton from './SignOutButton';

import s from './Navbar.module.css';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="px-6">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-8">
          <div className="flex items-center flex-1">
            <Link href="/" className="w-48">
              <img src="/logofinal.png" alt="Logo" />
            </Link>
            <nav className="hidden ml-6 space-x-3 lg:block">
              {/* <Link href="/jobs" className={s.link}>
                🚀Jobs
              </Link> */}
              <Link href="/dashboard" className={s.link}>
                🕹️Dashboard
              </Link>
              <Link href="/courses" className={s.link}>
                🧠Courses
              </Link>
              {/* <Link href="/colleges" className={s.link}>
               🏛️Colleges
              </Link> */}
              <Link href="/campus" className={s.link}>
                🍺Campus
              </Link>
              {/* <Link href="/pricing" className={s.link}>
                🤑Pricing
              </Link> */}
            </nav>
          </div>
          <div className="flex justify-end flex-1 space-x-8">
            {user ? (
              <SignOutButton />
            ) : (
              <Link href="/signin" className={s.link}>
                🤘Join
              </Link>
            )}
                          {user && (
                <Link href="/account" className={s.link}>
                 👽 Profile
                </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
