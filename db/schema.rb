# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140709164918) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: true do |t|
    t.string   "title",                      null: false
    t.boolean  "all_day",    default: false
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.string   "url"
    t.string   "color"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "noms", force: true do |t|
    t.string   "name"
    t.boolean  "delicious"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "restaurant_id"
  end

  create_table "photos", force: true do |t|
    t.string   "image"
    t.integer  "nom_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "photos", ["nom_id"], name: "index_photos_on_nom_id", using: :btree

  create_table "restaurants", force: true do |t|
    t.string   "name"
    t.string   "address"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "logo"
  end

end
