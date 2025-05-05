export default function filterDataById<T>(data: T[], id: number) {
  const filterData = data.filter((item) => item?.key !== id);
  return filterData;
}
