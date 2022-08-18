class AddIsOwnerToAdmins < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :is_owner, :boolean
  end
end
