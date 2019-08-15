export default {
  persons: {
    "person-1": {
      id: "person-1",
      name: "Chamander",
      lastname: "Mjollner",
      img: "avatar1.jpg"
    },
    "person-2": {
      id: "person-2",
      name: "Weedle",
      lastname: "Petazetas",
      img: "avatar2.jpg"
    },
    "person-3": {
      id: "person-3",
      name: "Slowpoke",
      lastname: "Captain Britain",
      img: "avatar3.jpg"
    },
    "person-4": {
      id: "person-4",
      name: "Meowth",
      lastname: "Caragolet",
      img: "avatar4.jpg"
    }
  },
  columns: {
    "column-1": {
      id: "column-1",
      color: "red",
      personIds: ["person-1", "person-2", "person-3", "person-4"]
    },
    "column-2": {
      id: "column-2",
      color: "blue",
      personIds: []
    }
  },
  columnOrder: ["column-1", "column-2"]
}
