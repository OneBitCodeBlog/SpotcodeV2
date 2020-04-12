class Api::V1::SearchController < ApplicationController
    def index
      @songs = Song.where('title LIKE ?', "%#{params[:query]}%")
      @albums = Album.where('title LIKE ?', "%#{params[:query]}%")
      @artists = Artist.where('name LIKE ?', "%#{params[:query]}%")
    end
end