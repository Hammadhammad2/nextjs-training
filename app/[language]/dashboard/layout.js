import SideBar from "../../components/shared/SideBar";

export default function Layout({ children, teams, chart }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideBar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <div className="grid grid-col-2 gap-5">
          <div>{teams}</div>
          <div>{chart}</div>
        </div>
      </div>
    </div>
  );
}
