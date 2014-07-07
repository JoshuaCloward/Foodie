class SiteController < ApplicationController

  def index
    @event = Event.new
  end

  def album
  end

  def places
    respond_to do |format|
      format.html do
        render :index

      end
      format.json do
        render json: {name: 'Joshua'}
      end
    end
  end

end
