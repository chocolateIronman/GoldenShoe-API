SELECT "Product".*, "Category".name AS category, "Colour".name AS colour
FROM "Product"
JOIN "ProductToCategoryMapping" ON "Product".id = "ProductToCategoryMapping".product
INNER JOIN "Category" ON "ProductToCategoryMapping".category = "Category".id
INNER JOIN "ProductToColourMapping" ON "ProductToColourMapping".product = "Product".id
INNER JOIN "Colour" ON "Colour".id = "ProductToColourMapping".colour
WHERE "Product".id=$1