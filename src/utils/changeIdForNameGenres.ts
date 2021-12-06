export function changeIdForNameGenres(genreList: number[]) {
  const listName: string[] = []

  let local = JSON.parse(localStorage.getItem('genres') as any) || { genres: [] }

  genreList.map(genres => {
    return local.genres.find((name: any) => genres === name.id && listName.push(name.name))
  })

  return listName;
}