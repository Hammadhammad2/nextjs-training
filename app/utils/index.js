export const generatePagination = (currentPage, totalPages) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function calculatePosition(index, totalItems) {
  if (totalItems === 1) {
    return "single";
  } else if (index === 0) {
    return "first";
  } else if (index === totalItems - 1) {
    return "last";
  } else {
    return "middle";
  }
}

export function generateInitialValues(formData) {
  const initialValues = {};

  formData?.forEach((field) => {
    const nestedKeys = field.name.split(".");
    let currentValue = initialValues;

    nestedKeys.forEach((key, index) => {
      if (index === nestedKeys.length - 1) {
        if (field.multiple) {
          currentValue[key] = [];
        } else {
          currentValue[key] = "";
        }
      } else {
        if (!currentValue[key]) {
          currentValue[key] = isNaN(nestedKeys[index + 1]) ? {} : [];
        }
        currentValue = currentValue[key];
      }
    });
  });

  return initialValues;
}
