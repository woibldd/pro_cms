sudo yum install -y git

# //安装Node V8
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install v10.24.0

npm install -g babel-plugin-import core-js node-sass@^4.14.1 postcss-px2rem-exclude sass-loader@^7.3.1 uglifyjs-webpack-plugin @nuxtjs/axios @nuxtjs/proxy



