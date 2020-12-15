import 'package:flutter/material.dart';
import 'package:MovieApp/models/movie.dart';
import 'package:MovieApp/models/rating.dart';

import 'ratings.dart';
import 'categories.dart';

class MovieWidget extends StatelessWidget {
  final Movie movie;

  const MovieWidget({Key key, this.movie}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: ListView(
      children: [
        Column(
          children: [
            Text(movie.name,
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                )),
            Image(
              image: AssetImage(movie.getImageAssetLocation()),
            ),
            SizedBox(
              height: 10,
              width: 0,
            ),
            RatingTable(
              key: ValueKey("rW1"),
              ratings: movie.ratings,
            ),
            SizedBox(
              height: 10,
              width: 0,
            ),
            CategoryList(
              key: ValueKey("cW1"),
              categories: movie.categories,
            ),
            SizedBox(
              height: 10,
              width: 0,
            ),
            Text(movie.description)
          ],
        )
      ],
    ));
  }
}
