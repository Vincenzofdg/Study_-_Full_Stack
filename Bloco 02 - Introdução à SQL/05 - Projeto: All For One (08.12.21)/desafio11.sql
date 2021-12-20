SELECT notes FROM northwind.purchase_orders WHERE notes LIKE 'Purchase generated based on Order #%' AND SUBSTRING(notes, 36, 2) BETWEEN '30' AND '39';
