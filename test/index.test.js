const pegaArquivo = require('../index');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('Deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  });

  it('Deve retornar um array com resultados', async () => {
    const result = await pegaArquivo('/home/cristiano/Documentos/Workspaces/Cursos/Alura/JavaScript/biblioteca-node/test/arquivos/texto1.md');

    expect(result).toEqual(arrayResult);
  });

  it('Deve retornar mensagem "não há links', async () => {
    const result = await pegaArquivo('/home/cristiano/Documentos/Workspaces/Cursos/Alura/JavaScript/biblioteca-node/test/arquivos/texto_semLink.md');

    expect(result).toBe('não há links');
  });

  it('Deve lançar um erro na falta de arquivo', async () => {
    await
      expect(pegaArquivo('/home/cristiano/Documentos/Workspaces/Cursos/Alura/JavaScript/biblioteca-node/test/arquivos/'))
  });

  it('Deve resolver a função com sucesso', async () => {
    await
      expect(pegaArquivo('/home/cristiano/Documentos/Workspaces/Cursos/Alura/JavaScript/biblioteca-node/test/arquivos/texto1.md'))
        .resolves.toEqual(arrayResult);
  })
});

