require 'selenium-webdriver'
require 'capybara'
require 'capybara/dsl'
require 'pry'
require 'json'

include Capybara::DSL

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(
    app,
    # browser: :chrome
    browser: :firefox
    # browser: :safari
  )
end

Capybara.default_driver = :selenium

visit("https://computer-database.gatling.io/computers")

computer_list = []

(0..57).each do |each_page|
  table_of_data = all('.computers tr td')
  for i in 0..(table_of_data.count / 4) - 1 do
    computer_list.push({
      "id": table_of_data[(i*4)].find('a')['href'].split("io/computers/").last.to_i,
      "name": table_of_data[(i*4)].text,
      "introduced": table_of_data[(i*4)+1].text,
      "discontinued": table_of_data[(i*4)+2].text,
      "company": table_of_data[(i*4)+3].text,
      "url": table_of_data[(i*4)].find('a')['href']
    })
  end
  find('.next a').click unless (each_page == 57)
end

File.write('./computers-data.json', JSON.dump(computer_list))

