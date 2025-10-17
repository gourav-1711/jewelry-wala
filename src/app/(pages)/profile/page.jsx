import AccountPage from '@/app/(sections)/Profile';
import React from 'react'
import { cookies } from 'next/headers';


export const metadata = {
    title: "Profile",
    description:
      "Profile Page",
  };

  async function getDetails() {
    const cookie = await cookies();
    const token = cookie.get("user");

    if (!token) return null;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/website/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        method: "post",
      }
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    if (!response.ok || !data._status) {
      return null;
    }
    return data._data;
  }

export default async function page() {
  const details = await getDetails();
  return (
    <>
      <AccountPage data={details}/>
    </>
  )
}
