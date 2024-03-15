export const generatePagination = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

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

export function calculatePosition(index, allPages, page) {
  let position = "first" | "last" | "single" | "middle";

  if (index === 0) position = "first";
  if (index === allPages.length - 1) position = "last";
  if (allPages.length === 1) position = "single";
  if (page === "...") position = "middle";

  return position;
}

export function generateInitialValues(formData) {
  const initialValues = {};

  formData?.forEach((field) => {
    const nestedKeys = field.name.split(".");
    let currentValue = initialValues;

    nestedKeys.forEach((key, index) => {
      if (index === nestedKeys.length - 1) {
        currentValue[key] = "";
      } else {
        currentValue[key] = currentValue[key] || {};
        currentValue = currentValue[key];
      }
    });
  });

  return initialValues;
}
