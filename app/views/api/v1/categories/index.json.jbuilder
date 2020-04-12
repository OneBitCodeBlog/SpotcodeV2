json.categories @categories.each do |category|
  json.id category.id
  json.name category.name
  json.image_url url_for(category.image)
end