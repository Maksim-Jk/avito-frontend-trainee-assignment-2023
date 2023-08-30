export const validateObject = (obj: Record<string, any>, key?: string): boolean => {
  if (!key) {
      let isValid = false;
      for (const objKey in obj) {
          if (obj.hasOwnProperty(objKey)) {
              if (obj[objKey] !== null && obj[objKey] !== undefined) {
                  isValid = true;
                  break;
              }
          }
      }
      return isValid;
  } else {
      if (obj[key] !== null && obj[key] !== undefined) {
          if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
              for (const nestedKey in obj[key]) {
                  if (obj[key].hasOwnProperty(nestedKey)) {
                      if (obj[key][nestedKey] !== null && obj[key][nestedKey] !== undefined) {
                          return true;
                      }
                  }
              }
              return false; // Если все значения вложенного объекта не валидные
          }
          return true; // Если значение по ключу валидное
      }
      return false; // Если значение по ключу не валидное
  }
}