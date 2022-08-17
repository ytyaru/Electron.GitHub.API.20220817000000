class GitHub {
    constructor(opt=null) {
        this.username = opt?.username
        this.token = opt?.token
        this.branch = `master`
    }
    async createRepo(params) { // https://docs.github.com/ja/rest/repos/repos#create-a-repository-for-the-authenticated-user
        await window.myApi.request({
            params: {
                method: 'POST',
                url: 'https://api.github.com/user/repos',
                headers: {
                    'Authorization': `token ${this.token}`,
                },
                params: params,
            },
        },(json, res)=>{
            console.debug(res)
            console.debug(json)
        },(res)=>{
            console.debug(res)
        })
    }
    #validRepoName(name) { return name.match(/[a-zA-Z0-9\._\-]{1,100}/g) }
    /*
    async push(options) {
        // リポジトリがなければ作成する(init)
        // add, commit, push
        let res = await window.myApi.shell(`cd ./repo/${options.repository}`)
        console.debug(res.stdout)
        this.#init()
    }
    async #init() {
        const exists = await window.myApi.exists(`.git`)
        if(!exists) {
            let res = await window.myApi.shell(`git init`)
            console.debug(res.stdout)
        }
    }

    async #add() {
        await window.myApi.shell(`git add .`)
    }
    async #addList() {
        await window.myApi.shell(`git add -n .`)
    }
    async #commit(message) {
        await window.myApi.shell(`git commit -m '${message}'`)
    }
    async #remoteAddOrigin() {
        await window.myApi.shell(`git remote add origin "https://${username}:${token}@github.com/${username}/${repo}.git"`)
    }
    async #remoteSetUrlOrigin() {
        await window.myApi.shell(`git remote set-url origin "https://${username}:${token}@github.com/${username}/${repo}.git"`)
    }
    async #push() {
        await window.myApi.shell(`git push origin ${this.branch}`)
    }
    async #setUser(username, email, isLocal=false) {
        const opt = '--' + ((isLocal) ? 'global' : 'local')
        await window.myApi.shell(`git config ${opt} user.name '${username}'`)
        await window.myApi.shell(`git config ${opt} user.email '${email}'`)
    }
    */
}
