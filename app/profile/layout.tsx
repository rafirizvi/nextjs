import SideNav from "../ui/dashboard/sidenav";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}