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

ActiveRecord::Schema.define(version: 2021_05_17_225846) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bill_splits", force: :cascade do |t|
    t.integer "bill_id", null: false
    t.integer "recipient_id", null: false
    t.float "splited_bill_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "recipient_paid", default: false
    t.index ["bill_id"], name: "index_bill_splits_on_bill_id"
    t.index ["recipient_id"], name: "index_bill_splits_on_recipient_id"
  end

  create_table "bills", force: :cascade do |t|
    t.float "amount", null: false
    t.string "description", null: false
    t.date "bill_date", null: false
    t.integer "author_id", null: false
    t.boolean "paid", default: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "nums_splits"
    t.text "note"
    t.index ["author_id"], name: "index_bills_on_author_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "friend_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id"
    t.index ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
