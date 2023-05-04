import { SignIn, auth } from "@clerk/nextjs/app-beta"

export default function IndexPage() {
  const { userId } = auth()
  return (
    <section>
      {!userId && <SignIn />}
      {!!userId && (
        <p className="text-white">
          You{"'"}re signed in! {userId}
        </p>
      )}
    </section>
  )
}
