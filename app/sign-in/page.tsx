import { redirect } from 'next/navigation'

export default async function SignInPage() {
  // Redirect directly to explore - no authentication needed
  redirect('/explore')
}
