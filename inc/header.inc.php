<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="files/css/ez-grid.css" />
    <link rel="stylesheet" href="files/css/ez-style.css" />
    <script src="files/js/jquery-3.6.0.js"></script>
    <script src="files/js/credit_request_functions.js" async></script>
    <title>Emanuel Ziegler - Finanzcoach</title>
</head>
<body>
    
    <!-- WRAPPER BEGIN -->
    <div class="wrapper center-box">

        <!-- HEADER BEGIN -->
        <header class="col-100">
            <h1>EZ- Finanzcoach</h1>
            <nav>
                <ul>
                    <li class="<?= empty($page) ? "active" : ""; ?>">
                        <a href="index.php?">Startseite</a>
                    </li>
                    <li class="<?= ($page === "credit_request") ? "active" : ""; ?>">
                        <a href="index.php?page=credit_request">Kreditanfrage</a>
                    </li>
                    <li class="<?= ($page === "contact") ? "active" : ""; ?>">
                        <a href="index.php?page=contact">Kontakt</a>
                    </li>
                    <li class="<?= ($page === "imprint") ? "active" : ""; ?>">
                        <a href="index.php?page=imprint">Impressum</a>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- HEADER END -->

        <!-- MAIN-CONTENT BEGIN -->
        <main>