frappe.ui.form.on('Project', {
    vehicle: function(frm) {
        if (!frm.doc.project_name) {
            frm.set_value('project_name', frm.doc.vehicle);

            frappe.db.get_value('Vehicle', frm.doc.vehicle, 'customer')
				.then(function (customer_name) {
                    frm.set_value('customer', customer_name.message.customer);
				});
        }
    }
});
