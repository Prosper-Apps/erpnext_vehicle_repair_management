import frappe

def on_update(self, event_name):
    frappe.db.set_value("Vehicle", self.vehicle, "last_odometer", self.current_odometer)