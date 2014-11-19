desc "compile and run the site"
task :default do
  pids = [
    spawn("bundle exec jekyll serve --baseurl "" --watch"), # put `auto: true` in your _config.yml
    spawn("bundle exec scss assets/sass/styles.css.scss assets/css/styles.css")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end
