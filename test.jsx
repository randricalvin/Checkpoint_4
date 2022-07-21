const changeInfos = (event) => {
  const changeDatas = { ...datas };
  changeDatas[event.target.name] = event.target.value;
  setDatas({
    ...datas,
    ...changeDatas,
  });
};

<form>
        <Form
          name="name"
          label="Nom du projet"
          value={datas.name}
          onChange={changeInfos}
        />
        <Form
            name="description"
            label="Description"
            value={datas.description}
            onChange={changeInfos}
        />
        <Form
            name="github_link"
            label="Lien Github"
            value={datas.github_link}
            onChange={changeInfos}
        />
        <Form
            name="site_link"
            label="Lien Site"
            value={datas.site_link}
            onChange={changeInfos}
        />
      </form>