frappe.ui.form.on('Project', {
    vehicle: function(frm) {
        if (!frm.doc.project_name) {
            frm.set_value('project_name', frm.doc.vehicle);
        }
    }
});
