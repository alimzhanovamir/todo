const sortString = (a,b) => a.localeCompare(b);

// export const tasksSelector = ({listReducer: { list, searchValue, sortByTypeValue, sortValue }}) => (
//   list
//     .filter( ({ title, complete }) => {
//       const validValues = [];
      
//       if (searchValue) {
//         const match = title.toLowerCase().match(searchValue);
//         validValues.push(match ? true : false);
//       }
//       else {
//         validValues.push(true);
//       }
      
//       switch (sortByTypeValue) {
//         case 1:
//           validValues.push( complete === false);
//           break;

//         case 2:
//           validValues.push( complete === true);
//           break;
      
//         default:
//           validValues.push(true);
//           break;
//       }

//       return validValues.every(val => val)

//     })
//     .sort( (currentTask, nextTask) => {
//       switch (sortValue) {
//         case 0:
//           return nextTask.dateForSort - currentTask.dateForSort;
//         case 1:
//           return currentTask.dateForSort - nextTask.dateForSort;
//         case 2:
//           return sortString(currentTask.title, nextTask.title);
//         case 3:
//           return sortString(nextTask.title, currentTask.title);
//         default:
//           break;
//       }

//       return true
//     })
// )

export const filterTheList = (list, searchValue, sortByTypeValue, sortValue) => (
  list
    .filter( ({ title, complete }) => {
      const validValues = [];
      
      if (searchValue) {
        const match = title.toLowerCase().match(searchValue);
        validValues.push(match ? true : false);
      }
      else {
        validValues.push(true);
      }
      
      switch (sortByTypeValue) {
        case 1:
          validValues.push( complete === false);
          break;

        case 2:
          validValues.push( complete === true);
          break;
      
        default:
          validValues.push(true);
          break;
      }

      return validValues.every(val => val)

    })
    .sort( (currentTask, nextTask) => {
      switch (sortValue) {
        case 0:
          return nextTask.dateForSort - currentTask.dateForSort;
        case 1:
          return currentTask.dateForSort - nextTask.dateForSort;
        case 2:
          return sortString(currentTask.title, nextTask.title);
        case 3:
          return sortString(nextTask.title, currentTask.title);
        default:
          break;
      }

      return true
    })
)