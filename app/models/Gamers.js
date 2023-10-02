export class Gamer {
    constructor(name, imgUrl) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.score = 0;
    }

    get GamerCard() {
        return `
        <div class="col-12 col-md-6">
        <div>
            <img src="
             ${this.imgUrl}" class='img-fluid'>
          <p>${this.name}</p>
          <button class="btn btn-success" onclick="app.GamersController.increaseGamerScore('Barrett')">+</button>
        </div>
      </div>`
    }

}
