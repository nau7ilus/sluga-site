import Permissions from "./Permissions";

export default class Guild {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.owner = data.owner;
    this.isBotOnGuild = data.isBotOnGuild;
    this.isPremium = data.isPremium;
    this.permissions = new Permissions(data.permissions);
  }

  get iconURL() {
    const imageExt = ".png?size=2048";
    return this.icon
      ? `https://cdn.discordapp.com/icons/${this.id}/${this.icon}${imageExt}`
      : null;
  }

  get nameAcronym() {
    return this.name.replace(/\w+/g, name => name[0]).replace(/\s/g, "");
  }
}
