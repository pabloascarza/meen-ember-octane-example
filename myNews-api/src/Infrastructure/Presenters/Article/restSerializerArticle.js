module.exports = function makePresentArticlefunction () {
	return function presentArticles(articles) {
		let restJsonArticles = {articles: null};
		if (!Array.isArray(articles)) {
			restJsonArticles.articles = articles.toJsonObject();
			return restJsonArticles;
		}
		restJsonArticles.articles = articles.map((article) => article.toJsonObject());
		return restJsonArticles;
	}
};
