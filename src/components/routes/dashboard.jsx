export default function Dashboard() {
  const [savedLists, setSavedLists] = null;

  return !savedLists ? (
    <p className="alert alert-warning text-center">Fetching user data</p>
  ) : (
    ""
  );
}
