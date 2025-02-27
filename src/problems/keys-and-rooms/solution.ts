const canVisitAllRooms = (rooms: number[][]): boolean => {
  const visitedRooms = new Set<number>();

  const openRoom = (key: number) => {
    if (visitedRooms.has(key)) return;

    visitedRooms.add(key);

    rooms[key]!.forEach(keyInRoom => openRoom(keyInRoom));
  };

  openRoom(0);

  return rooms.length === visitedRooms.size;
};

export default canVisitAllRooms;
