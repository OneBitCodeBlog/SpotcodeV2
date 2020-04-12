json.title @album.title
json.cover_url url_for(@album.cover)

json.songs @album.songs.each do |song|
  json.id song.id
  json.title song.title
  json.file_url url_for(song.file)
end