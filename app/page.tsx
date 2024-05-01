async function getShowData(url: string) {

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()

}

export default async function Home() {
  const showData = await getShowData('https://api.themoviedb.org/3/movie/11?api_key=4b4cebd85b72c0c8c3c677e078d1506d');
  

  console.log("show data: ", showData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Movie Den</h1>
      {showData.title}
    </main>
  );
}
