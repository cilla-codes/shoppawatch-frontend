class CartItem < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :cart
  belongs_to :product

  validates :quantity, 
            :presence => true,
            :numericality => { only_integer: true, greater_than: 0 }
  def total_price
    product.price * quantity
  end

  def name
    product.name
  end

  def price
    product.price
  end

  def main_image
    product.main_image.url
  end
end
