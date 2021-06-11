sudo yum install -y git

# //安装Node V8
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 8.16.2

npm install -g stream
npm install -g path
npm install -g fs
npm install -g assert
npm install -g crypto
npm install -g multimap
npm install -g utf8
npm install -g mime
npm install -g underscore
npm install -g request
npm install -g streamifier
npm install -g md5
npm install -g ontp
npm install -g thirty-two


