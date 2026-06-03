import { redirect } from 'next/navigation'

export default async function SignUpPage() {
  // Redirect directly to explore - no authentication needed
  redirect('/explore')
}
