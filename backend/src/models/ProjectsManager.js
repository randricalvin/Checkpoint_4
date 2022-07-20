const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  static table = "project";

  get() {
    return this.connection.query(`SELECT * FROM ${ProjectsManager.table}`);
  }

  getOne(id) {
    return this.connection.query(
      `SELECT * FROM ${ProjectsManager.table} WHERE id = ?`,
      [id]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectsManager.table} set ? where id = ?`,
      [project, project.id]
    );
  }

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectsManager.table} (name, description, site_link, github_link, team_id) values (?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.site_link,
        project.github_link,
        project.team_id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${ProjectsManager.table} where id = ?`,
      [id]
    );
  }
}

module.exports = ProjectsManager;
